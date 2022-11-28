const { Url } = require('../../dataStorage/url/url');
const { BaseApi } = require('./baseApi');

class DashboardApi extends BaseApi {
  /*eslint-disable*/

    static async createDashboard(param) {
        const paramValues = JSON.parse(param);
        const axiosInstance = await this.createAxiosInstance();
        await axiosInstance.post(Url.dashboardData, paramValues);
    }

    static async removeDashboard(dashboardId) {
        const axiosInstance = await this.createAxiosInstance();
        await axiosInstance.delete(`${Url.dashboardData}/${dashboardId}`);
    }

    static async removeWidgetOnDashboard(dashboardId, widgetId) {
        const axiosInstance = await this.createAxiosInstance();
        return axiosInstance.delete(`${Url.dashboardData}/${dashboardId}/${widgetId}`);
    }

    static async updateDashboard(dashboardId, param) {
        const paramValues = JSON.parse(param);
        const axiosInstance = await this.createAxiosInstance();
        return axiosInstance.put(`${Url.dashboardData}/${dashboardId}`, paramValues);
    }

    static async addWidgetOnDashboard(dashboardId, widgetId) {
        const axiosInstance = await this.createAxiosInstance();
        return axiosInstance.put(`${Url.dashboardData}/${dashboardId}/add`, {
            addWidget: {
                share: true,
                widgetId,
                widgetName: 'string',
                widgetOptions: {},
                widgetPosition: {
                    positionX: 0,
                    positionY: 0,
                },
                widgetSize: {
                    height: 30,
                    width: 30,
                },
                widgetType: 'string',
            },
        });
    }

    static async getDashboardData() {
        const axiosInstance = await this.createAxiosInstance();
        const dashboardData = await axiosInstance.get(Url.dashboardData);
        return dashboardData.data.content;
    }

    static async getDashboardDataById(dashboardId) {
        const axiosInstance = await this.createAxiosInstance();
        const dashboardData = await axiosInstance.get(`${Url.dashboardData}/${dashboardId}`);
        return dashboardData;
    }
}

module.exports = { DashboardApi };
