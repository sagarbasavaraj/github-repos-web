export default class RepositoryUtils {
  /**
   * getLastThirtyDaysFromGivenDate - Computes last 30 days from given date. if from date is null or undefined default is today's date.
   * @param fromDate - last 30 days from this date.
   * @returns date last 30 days from given date.
   */
  static getLastThirtyDaysFromGivenDate(fromDate?: string) {
    const currentDate = new Date(fromDate || new Date());
    currentDate.setDate(currentDate.getDate() - 30);
    const date = currentDate.toISOString().split('T')[0];
    return date;
  }
}
