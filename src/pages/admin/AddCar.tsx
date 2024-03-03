import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { Option, getFormikInfo } from './Car/GetFormikInfo';
import { CreateCarRequest } from '../../models/Car/Request/CreateCarRequest';
import { generateOptions } from './Car/GenerateOptions';
import { Category } from '../../models/Enum/Category';
import { FuelType } from '../../models/Enum/FuelType';
import { GearType } from '../../models/Enum/GearType';
import ImageDataService from '../../services/ImageDataService';
import CarService from '../../services/CarService';
import ColorService from '../../services/ColorService';
import ModelService from '../../services/ModelService';
import BaseFetcher from '../../lib/BaseFetcher';
import FormikInput from '../../components/FormikInput/FormikInput';
import FormikSelect from '../../components/FormikInput/FormikSelect';
import BaseFetcherV3 from '../../lib/BaseFetcherV3';


const AddCar: React.FC = () => {
  const [models, setModels] = useState<Option[]>([]);
  const [colors, setColors] = useState<Option[]>([]);
  const [imagePath, setImagePath] = useState<string>('');

  const categoryOptions: Option[] = generateOptions(Category);
  const fuelTypeOptions: Option[] = generateOptions(FuelType);
  const transmissionTypeOptions: Option[] = generateOptions(GearType);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      formData.append('image', event.currentTarget.files[0]);
    }

    const response = await ImageDataService.image(formData);
    setImagePath(response.data);
  };

  const handleSubmit = async (values: CreateCarRequest, { resetForm }: FormikHelpers<CreateCarRequest>) => {
    // if (!imagePath) {
    //   toast.error('Lütfen önce bir resim ekleyin!');
    //   return;
    // }

    try {
      const carDataWithImage = { ...values, imagePath };
      const response = await CarService.add(carDataWithImage);
      toast.success('Araç başarıyla eklendi.');
    } catch (error) {
      toast.error('Bilinmeyen bir hata oluştu.');
    }
  };

  const handleFormSubmit = (formikSubmit: (values?: CreateCarRequest) => void) => {
    // if (!imagePath) {
    //   toast.error('Lütfen önce bir resim ekleyin!');
    //   return;
    // }

    formikSubmit();
  };

  const AddInitialValues: CreateCarRequest = {
    year: 0,
    plate: '',
    minFindeksRate: 0,
    kilometer: 0,
    dailyPrice: 0,
    modelId: 0,
    colorId: 0,
    fuelType: "Yakıt Tipi Giriniz",
    gearType: "Vites Tipi Seçiniz",
    category: "Kategory Seçiniz",
    passengerCapacity: 0,
    imagePath: '',
};


  return (
    <div className='container'>
      <BaseFetcherV3 service={() => ColorService.getAll()} onBaseFetched={setColors} />
      <BaseFetcherV3 service={() => ModelService.getAll()} onBaseFetched={setModels} />

      <Formik
        initialValues={AddInitialValues}
        onSubmit={handleSubmit}
        validationSchema={""}
      >
        {({ handleSubmit: formikSubmit }) => (
          <Form>
            <label className='form-label'>
              Image Path
              <input className='form-control' name="image" type="file" onChange={handleImageChange} />
            </label>
            {getFormikInfo(models, colors,  transmissionTypeOptions, fuelTypeOptions, categoryOptions).map((formikInfo) => {
              if (formikInfo.formikType === "FormikInput") {
                return <FormikInput key={`input-${formikInfo.name}`} label={formikInfo.label} name={formikInfo.name} type={formikInfo.type ?? ''} placeholder={formikInfo.placeholder ?? ''} />;
              } else if (formikInfo.formikType === "FormikSelect") {
                return <FormikSelect key={`select-${formikInfo.name}`} label={formikInfo.label} name={formikInfo.name} options={formikInfo.options ?? []} />;
              }
            })}
            <button className='btn btn-success form-control' type="button" onClick={() => formikSubmit()}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCar;
