import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withActiveTab } from 'library';
import Product from 'components/product/Product';

import TabPanel from './tab-panel/TabPanel';

import './homeOffersTabs.scss';

const HomeOffersTabs = ({ handleChange, value }) => (
  <>
    <div className="tabsContainer">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs>
    </div>
    <div>
      <TabPanel value={value} index={0}>
        <div className="productContainer">
          <Product />
          <Product />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="productContainer">
          <Product />
          <Product />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="productContainer">
          <Product />
          <Product />
        </div>
      </TabPanel>
    </div>
  </>
);

export default withActiveTab(HomeOffersTabs);
