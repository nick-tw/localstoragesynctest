import React, { Suspense, useEffect, useState } from "react"
import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs"
import { PLASMIC } from "../plasmic-init"

import useLocalStorageState from "use-local-storage-state"

function PageComponent(props) {
  //this is fine
  const [test1, setTest1] = useLocalStorageState("test1", {
    defaultValue: false,
  })

  //this causes a Suspense error
  const [test2, setTest2] = useLocalStorageState(`test2`, { defaultValue: [] })

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={props.plasmicData}>
      <PlasmicComponent component='Homepage' componentProps={{}} />
    </PlasmicRootProvider>
  )
}

export default PageComponent
