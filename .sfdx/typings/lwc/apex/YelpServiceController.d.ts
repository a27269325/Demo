declare module "@salesforce/apex/YelpServiceController.getListByLatLon" {
  export default function getListByLatLon(param: {latlon: any, searchTerm: any}): Promise<any>;
}
declare module "@salesforce/apex/YelpServiceController.getListByAddress" {
  export default function getListByAddress(param: {address: any, searchTerm: any}): Promise<any>;
}
