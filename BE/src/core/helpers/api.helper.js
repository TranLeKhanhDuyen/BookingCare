export class ApiHelper {
  static parsePaging(queryParams) {
    let limit = queryParams.limit || 20;
    if (!limit || limit <= 0) limit = 20;

    let currentPage = queryParams.page || 1;
    if (currentPage <= 0) currentPage = 1;

    return {
      limit: parseInt(limit),
      total: null,
      currentPage: parseInt(currentPage),
      lastPage: null
    };
  }

  static getPaginationOffset({ currentPage, limit }) {
    return (currentPage - 1) * limit;
  }

  static setPaginationTotal(pagination, total) {
    pagination.total = total;
    pagination.lastPage =
      Math.floor((total > 0 ? total - 1 : total) / pagination.limit) + 1;
    return pagination;
  }
}
