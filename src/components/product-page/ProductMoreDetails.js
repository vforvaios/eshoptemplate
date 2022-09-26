import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from 'components/tab-panel/TabPanel';
import { withActiveTab } from 'library';
import React from 'react';

const ProductMoreDetails = ({ tabs, handleChange, value, offers }) => {
  return (
    <>
      <div className="tabsContainer">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example">
          {tabs?.map((tab) => (
            <Tab key={tab.id} label={tab.name} />
          ))}
        </Tabs>
      </div>
      <div>
        {tabs?.map((tab, index) => (
          <TabPanel key={tab?.id} value={value} index={index}>
            {tab?.content}
          </TabPanel>
        ))}
      </div>
    </>
  );
};

export default withActiveTab(ProductMoreDetails);
