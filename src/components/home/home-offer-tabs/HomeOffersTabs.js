import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Product from 'components/product/Product';
import { withActiveTab } from 'library';
import React from 'react';

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
        <ul className="products-grid">
          <li>
            <Product id={1} />
          </li>
          <li>
            <Product id={2} />
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul className="products-grid">
          <li>
            <Product id={3} />
          </li>
          <li>
            <Product id={4} />
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul className="products-grid">
          <li>
            <Product id={5} />
          </li>
          <li>
            <Product id={6} />
          </li>
        </ul>
      </TabPanel>
    </div>
  </>
);

export default withActiveTab(HomeOffersTabs);
