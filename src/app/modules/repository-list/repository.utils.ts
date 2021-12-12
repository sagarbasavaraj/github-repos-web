export default class RepositoryUtils {
  //compute last 30 days and return
  static getDate() {
    const today = new Date();
    today.setDate(today.getDate() - 30);
    const date = new Date(today.toISOString().split('T')[0]);
    const year = date.getFullYear();
    //if single digit append 0
    //slice -2 ensures we take last 2 digit
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return year + '-' + month + '-' + day;
  }
}
