const fs = require('fs');
const { DataWrapper } = require('../../core/src/helpers/dataWrapper');
const { ReportPortalHelper } = require('../../core/src/helpers/reportPortalHelper');

describe('verify that launch contains expected data', () => {
  it('check all 10 runs with expected value', async () => {
    const url = 'http://localhost:8080/api/v1/hometask_project/launch';
    const dataFromRequest = await ReportPortalHelper.getLaunchDataRequest(url);
    const data = dataFromRequest.data.content;
    await fs.writeFileSync(DataWrapper.pathToRequestedLaunchData, JSON.stringify(data), 'utf-8');
    const dataFromStorage = await DataWrapper.getLaunchData();
    const dataFromRequestStringify = await DataWrapper.getDataFromCopy();
    await expect(dataFromStorage).toEqual(dataFromRequestStringify);
  });
});
