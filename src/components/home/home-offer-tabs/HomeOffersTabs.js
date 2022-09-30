import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Product from 'components/product/Product';
import TabPanel from 'components/tab-panel/TabPanel';
import { withActiveTab } from 'library';
import React from 'react';

import './homeOffersTabs.scss';

const HomeOffersTabs = ({ handleChange, value, offers }) => (
  <>
    <h2 className="section-title">OFFERS</h2>
    <div className="tabsContainer">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Disabled" disabled />
      </Tabs>
    </div>
    <div>
      <TabPanel value={value} index={0}>
        <ul className="products-grid">
          {offers?.map((product) => (
            <li key={product.productId}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </div>
  </>
);

export default withActiveTab(HomeOffersTabs);
