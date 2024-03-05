import React, { useEffect, useState } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';

type Props = {
  service: any;
  Table: any;
  AddData?: any;
  UpdateData?: any;
  DeleteData?: any;
}

const BaseAdmin: React.FC<Props> = ({ service, Table, AddData, UpdateData, DeleteData }: Props) => {
  const [data, setData] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [isAddingData, setIsAddingData] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isDeletingData, setIsDeletingData] = useState(false);
  const [isUpdatingData, setIsUpdatingData] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [isAddingData, isDeletingData, isUpdatingData, service]);

  const fetchData = async () => {
    try {
      const fetchedData = await service.getAll();
      setData(fetchedData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAdd = async (formData: any) => {
    try {
      await AddData(formData);
      setShowModal(false);
      setIsAddingData(false);
      fetchData();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleUpdate = (item: any) => {
    setSelectedItem(item);
    setIsAddingData(false);
    setIsDeletingData(false);
    setShowModal(true);
  };


  const handleDelete = (item: any) => {
    setSelectedItem(item);
    setIsAddingData(false);
    setIsDeletingData(true);
    setShowModal(true);
  };

  const renderModalBody = () => {
    if (isAddingData) {
      return <AddData onSubmit={handleAdd} />;
    } else if (isDeletingData) {
      return <DeleteData />;
    } else {
      return <UpdateData item={selectedItem} onSubmit={() => setIsUpdatingData(false)} />;
    }
  };

  const handleSaveChanges = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className='container p-5' >
      <Row className='button-group'>
        <Col xs={12} sm={4}>
          <Button variant='primary' className='w-100' onClick={() => { setIsAddingData(true); setIsUpdatingData(false); setShowModal(true); }}>
            Add
          </Button>
        </Col>
        <Col xs={12} sm={4}>
          <Button variant='warning' className='w-100' onClick={() => handleUpdate(selectedItem)}>
            Update
          </Button>
        </Col>
        <Col xs={12} sm={4}>
          <Button variant='danger'  className='w-100' onClick={() => handleDelete(selectedItem)}>
            Delete Car
          </Button>
        </Col>
      </Row>
      <div className='table-container' style={{ backgroundColor: 'white' }}>
        <Table data={data} />
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='mb-2 font-weight-bold'>
            {isAddingData ? 'Add' : (isDeletingData ? 'Delete' : 'Update')} Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderModalBody()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BaseAdmin;