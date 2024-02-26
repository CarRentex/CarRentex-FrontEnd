import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import FormikInput from "../FormikInput/FormikInput";
import { AppDispatch } from "../../store/store";
type Props = {};

const RentalForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedValue, setSelectedValue] = useState({});

  const modelState = useSelector((state: any) => state.model);
  const colorState = useSelector((state: any) => state.color);
  const branchState = useSelector((state: any) => state.branch);

/*   useEffect(() => {
    dispatch(modelLis());
    dispatch(colorList());
    dispatch(fetchBranches());
  }, [dispatch]); */

  const initialValues = {
    kilometer: 0,
    year: 0,
    dailyPrice: 0,
    plate: "",
    modelId: 0,
    colorId: 0,
    branchId: 0,
    carState: "",
    gearType: "",
    fuelType: "",
    imageUrl: ""
  };
  const validationSchema = object({
    kilometer: number().required("Kilometre alanı zorunludur").min(0),
    year: number().required("Yıl alanı zorunludur").min(0),
    dailyPrice: number().required("Günlük fiyat alanı zorunludur").min(0),
    plate: string().required("Plaka alanı zorunludur").min(3),
    modelId: number().required("Model seçmek zorunlu").min(0),
    colorId: number().required("Renk seçmek zorunlu").min(0),
    branchId: number().required("Ofis seçmek zorunlu").min(0),
    carState: string().required("Araç durumu alanı zorunludur").min(3),
    gearType: string().required("Vites tipi alanı zorunludur").min(3),
    fuelType: string().required("Yakıt tipi alanı zorunludur").min(3),
    imageUrl: string().required("Görsel alanı zorunludur"),
  });

  const handleAddCar = (values: any) => {
    //dispatch(addCar(values));
  };

  return (
    <div className="shadow-2xl shadow-gray-600 rounded-lg mt-3">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => {
          handleAddCar(values);
          setSelectedValue(values);
          resetForm();
        }}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        <Form className=" w-full grid grid-cols-2 gap-4">
          <div className="">
          <FormikInput
            name="kilometer"
            label="Kilometre"
            type="number"
            placeholder=""
            
          />
          </div>
          <div className="">
          <FormikInput 
          name="year" 
          label="Yıl" 
          type="number" 
          placeholder="" 
          />
          </div>
         <div>
         <FormikInput
            name="dailyPrice"
            label="Günlük Ücret"
            type="number"
            placeholder=""
          />
         </div>
          <div>
          <FormikInput name="plate" label="Plaka" type="text" placeholder="" />
          </div>
          <div>
          <label className="font-bold flex">Model</label>
          <Field name="modelId" as="select" className="mt-1 text-gray-700 border border-gray-300 rounded-lg w-full">
            <option value="" disabled>
              Model Seç{" "}
            </option>
{/*             {modelState.models.map((model: any) => (
              <option key={model.id} value={model.id}>
                {`${model.brandName} ${model.name}`}
              </option>
            ))} */}
          </Field>
          </div>
          <div>
          <label className="font-bold flex">Renk</label>
          <Field name="colorId" as="select" className="mt-1 text-gray-700 border border-gray-300 rounded-lg w-full">
            <option value="" disabled>
              Renk Seç{" "}
            </option>
{/*             {colorState.colors.map((color: any) => (
              <option key={color.id} value={color.id}>
                {`${color.name}`}
              </option>
            ))} */}
          </Field>
          </div>
          <div>
          <label className="font-bold flex">Şube</label>
          <Field name="branchId" as="select" className="mt-1 text-gray-700 border border-gray-300 rounded-lg w-full">
            <option value="" disabled>
              Şube Seç{" "}
            </option>
{/*             {branchState.branches.map((branch: any) => (
              <option key={branch.id} value={branch.id}>
                {` ${branch.name}`}
              </option>
            ))} */}
          </Field>
          </div>
          <div>
          <label className="font-bold flex">Araç Durumu</label>
          <Field name="carState" as="select" className="mt-1 text-gray-700 border border-gray-300 rounded-lg w-full">
            <option value="" disabled>
              Araç Durumu
            </option>
         {/*    {Object.values(CarState).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))} */}
          </Field>
          </div>
          <div>
          <label className="font-bold flex">Vites</label>
          <Field name="gearType" as="select" className="mt-1 text-gray-700 border border-gray-300 rounded-lg w-full">
            <option value="" disabled>
              Vites Tipi
            </option>
{/*             {Object.values(GearType).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))} */}
          </Field>
          </div>
          <div>
          <label className="font-bold flex">Yakıt</label>
          <Field name="fuelType" as="select" className="mt-1 mb-1 text-gray-700 border border-gray-300 rounded-lg w-full">
            <option value="" disabled>
              Yakıt Tipi
            </option>
{/*             {Object.values(FuelType).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))} */}
          </Field>
          </div>
         
          <div>
          <FormikInput
            name="imageUrl"
            label="Görsel"
            type="text"
            placeholder="Yüklenen görselin URL'ini ekle"
          />
          </div>
          <button type="submit" className="bg-sidebar text-white w-[10rem] h-[2.75rem] rounded-lg font-bold mt-8 ml-6">Araç Ekle</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RentalForm;