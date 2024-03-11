import { navigate, navigationRef } from "./NavigationHelper";





export const toContactInfo = (params?: any) => {

    navigate("ContactInfo", params);
};



export const toGoBack = () => {
    navigationRef.current.goBack();
};

