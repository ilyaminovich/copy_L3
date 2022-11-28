TA_L3 Framework

Installation:

Install Node.JS from https://nodejs.org/en/

For running automation tests locally use next steps after all installations:
1. Open framework in root folder via terminal (./ta_l3).
2. Run command "npm install"

Available NPM tasks:

1. npm run local_host_test -- --login=login --password=password --threads=threads - execute test on local machine (you need Docker with RP installed on 8080 port)
2. npm run web_version_test -- --login=login --password=password --threads=threads - execute test on web version of Report Portal
3. npm run test_mocha -- --login=login --password=password --threads=threads  - execute test on Mocha, you can select number of threads from 1 to 2
