const { Url } = require('../../dataStorage/url/url');
const { BaseApi } = require('./baseApi');

class WidgetApi extends BaseApi {
  /*eslint-disable*/
    static async createWigdet(nameValue) {
        const axiosInstance = await this.createAxiosInstance();
        await axiosInstance.post(Url.widgetData, {
            contentParameters: {
                contentFields: ['statistics$executions$failed'],
                itemsCount: 30,
                widgetOptions: {
                    includeMethods: false,
                    launchNameFilter: 'mentor',
                },
            },
            description: 'test1',
            filterIds: [],
            name: nameValue,
            share: true,
            widgetType: 'topTestCases',
        });
    }

    static async updateWigdet(widgetId, nameValue) {
        const axiosInstance = await this.createAxiosInstance();
        await axiosInstance.put(`${Url.widgetData}/${widgetId}`, {
            contentParameters: {
                contentFields: ['statistics$executions$failed'],
                itemsCount: 30,
                widgetOptions: {
                    includeMethods: false,
                    launchNameFilter: 'mentor',
                },
            },
            description: 'test1',
            filterIds: [],
            name: nameValue,
            share: true,
            widgetType: 'topTestCases',
        });
    }

    static async getWidgetData() {
        const axiosInstance = await this.createAxiosInstance();
        const widgetData = await axiosInstance.get(Url.widgetDataShared);
        return widgetData.data.content;
    }

    // static async getSpecifiedWidgetFromDashboardData(dashboardId) {
    //     const axiosInstance = await this.createAxiosInstance();
    //     const dashboardData = await axiosInstance.get(`${Url.dashboardData}/${dashboardId}`);
    //     return dashboardData.data.widgets;
    // }


}

module.exports = { WidgetApi };
