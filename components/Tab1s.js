import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ActivewearComp from './ActivewearComp';
import DenimComp from './DenimComp';
import KnitComp from './KnitCompo';
import ShirtComp from './ShirtComp';
import SweaterComp from './SweaterComp';
import UnderComp from './UnderComp';
import WovenComp from './WovenComp';


const Tab1s = (props) => {
  return (
    <div className="mt-12">
      
      <Tabs    defaultIndex={props.tabnumer}>
    <TabList>
    <Tab>Activewear</Tab>
    <Tab>Denim</Tab>
      <Tab>Knit</Tab>
      <Tab>Shirt</Tab>
      <Tab>Woven</Tab>
      <Tab>Sweater</Tab>
      <Tab>Undergarments</Tab>
    </TabList>

    <TabPanel>
      <ActivewearComp></ActivewearComp>
    </TabPanel>
    <TabPanel>
     <DenimComp></DenimComp>
    </TabPanel>

    <TabPanel>
     <KnitComp></KnitComp>
    </TabPanel>

    <TabPanel>
      <ShirtComp></ShirtComp>
    </TabPanel>

    <TabPanel>
      <WovenComp></WovenComp>
    </TabPanel>

    <TabPanel>
      <SweaterComp></SweaterComp>
    </TabPanel>

    <TabPanel>
    <UnderComp></UnderComp>
    </TabPanel>

  </Tabs>
    </div>
  )
}

export default Tab1s
