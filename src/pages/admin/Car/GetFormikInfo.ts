export interface Option {
    id: string;
    name: string;
    value: string;
    label: string;
    placeholder: string;
  }

export const getFormikInfo = (
    models?: Option[],
    colors?: Option[],
    transmissionTypeOptions?: Option[],
    fuelTypeOptions?: Option[],
    categoryOptions?: Option[],
) => {
    const initialOption: any = { value: '', name: 'Lütfen bir Seçim yapınız', label: 'Seçiniz' };

    const formikInfo = [
        { formikType: "FormikInput", label: "Model Year", name: "year", type: "number", placeholder: "Model Year giriniz" },
        { formikType: "FormikInput", label: "Plate", name: "plate", type: "string", placeholder: "Plate giriniz" },
        { formikType: "FormikInput", label: "Min Findeks Rate", name: "minFindeksRate", type: "number", placeholder: "Min Findeks Rate giriniz" },
        { formikType: "FormikInput", label: "Kilometer", name: "kilometer", type: "number", placeholder: "Kilometre giriniz" },
        { formikType: "FormikInput", label: "Daily Price", name: "dailyPrice", type: "number", placeholder: "Daily Price giriniz" },
        { formikType: "FormikSelect", label: "Transmission Type", name: "gearType", options: transmissionTypeOptions ? [initialOption, ...transmissionTypeOptions] : [] },
        { formikType: "FormikSelect", label: "Fuel Type", name: "fuelType", options: fuelTypeOptions ? [initialOption, ...fuelTypeOptions] : [] },
        { formikType: "FormikSelect", label: "Category", name: "category", options: categoryOptions ? [initialOption, ...categoryOptions] : [] },
        { formikType: "FormikInput", label: "Passenger Capacity", name: "passengerCapacity", type: "number", placeholder: "Passenger Capacity giriniz" },
        { formikType: "FormikSelect", label: "Model", name: "modelId", options: models ? [initialOption, ...models] : [] },
        { formikType: "FormikSelect", label: "Color", name: "colorId", options: colors ? [initialOption, ...colors] : [] },
    ];
    return formikInfo;
};