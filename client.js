// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Module, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
    new surfaceModule(),
    ],
    ...options,
  });
  buttonService = new Surface(300, 300, Surface.SurfaceShape.Flat);
  buttonService.setAngle(
    5,0
    )

  r360.renderToSurface(
    r360.createRoot('buttonService', { /* initial props */ }),
    buttonService
    )
  surface = r360.getDefaultSurface();

  // Render your app content to the default cylinder surface
  //default is 1000 * 600
  surfacePanel = r360.renderToSurface(
    r360.createRoot('surfacesExample', { /* initial props */ }),
    surface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  createPanel(){
    surfacePanel = r360.renderToSurface(
      r360.createRoot("surfacesExample",{} ),
      surface
      );
  }

  destroyPanel(){
    r360.detachRoot(surfacePanel)
  }
  resizeSurface(width,height){
    surface.resize(width, height);
  }
  changeSurfaceType(type){
    type === "Flat" ? surface.setShape(Surface.SurfaceShape.Flat) :
    surface.setShape(Surface.SurfaceShape.Cylinder)
  }
}

window.React360 = {init};
