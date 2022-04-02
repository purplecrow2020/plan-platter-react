import React from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'


export default function withCartHook(Component) {
    return function WrappedComponent(props) {
        const [image, takeScreenshot] = useScreenshot({
            type: "image/png",
            quality: 1.0
          });
        return <Component {...props} takeScreenshot={takeScreenshot}  imageSave={image} createFileName={createFileName}/>;
      }
}


