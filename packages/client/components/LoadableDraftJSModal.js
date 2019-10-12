import React from 'react'
import {menuShadow} from '../styles/elevation'
import AnimatedFade from './AnimatedFade'
import styled from '@emotion/styled'
import Modal from './Modal'
import withCoordsV2 from '../decorators/withCoordsV2'

const MenuBlock = styled('div')(({maxWidth}) => ({
  maxWidth,
  padding: '.25rem 0',
  position: 'absolute',
  zIndex: 400
}))

const MenuContents = styled('div')(({maxHeight}) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: 4,
  boxShadow: menuShadow,
  maxHeight,
  outline: 0,
  overflowY: 'auto',
  paddingBottom: 8,
  paddingTop: 8,
  textAlign: 'left',
  width: '100%'
}))

const LoadableDraftJSModal = (props) => {
  const {
    closePortal,
    coords,
    isClosing,
    setModalRef,
    LoadableComponent,
    queryVars,
    terminatePortal
  } = props
  return (
    <Modal onClose={closePortal} isOpen>
      <AnimatedFade appear duration={100} slide={32} in={!isClosing} onExited={terminatePortal}>
        <MenuBlock style={coords} ref={setModalRef}>
          <MenuContents>
            <LoadableComponent closePortal={closePortal} {...queryVars} />
          </MenuContents>
        </MenuBlock>
      </AnimatedFade>
    </Modal>
  )
}

export default withCoordsV2(LoadableDraftJSModal)