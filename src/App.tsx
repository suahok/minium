import { Center, Container, MantineProvider } from "@mantine/core"
import React, { useState } from "react"
import styled from "styled-components"
import design_light from "./assets/design_light.png"
import design_dart from "./assets/design_dart.png"

export default function App() {
  const [maskWidth, updateWaskWidth] = useState("")

  const handleMouseMove = (event: React.MouseEvent) => {
    const wrapWidth = document.body.clientWidth
    const target = event.currentTarget
    const clientWidth = target.clientWidth
    const margin = (wrapWidth - clientWidth) / 2
    const width = event.clientX - margin
    updateWaskWidth(target.clientWidth - width + "px")
  }

  const handleMouseLeave = () => {
    updateWaskWidth("80%")
  }

  return (
    <MantineProvider>
      <Container
        size="xl"
        px="0"
        py="xl"
        style={{ backgroundColor: "lightsteelblue" }}
      >
        <Center>
          <DragWrap
            onMouseOver={handleMouseMove}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseLeave}
          >
            <div className="guide-light">
              <img src={design_light} />
            </div>
            <div
              className="mask-dart"
              style={{
                width: maskWidth,
                transition: maskWidth === "80%" ? "width ease 0.15s" : "none"
              }}
            >
              <div className="guide-dark">
                <img src={design_dart} />
              </div>
            </div>
          </DragWrap>
        </Center>
      </Container>
    </MantineProvider>
  )
}

const DragWrap = styled.div`
  cursor: pointer;
  position: relative;
  width: 800px;
  height: 520px;
  background-color: whitesmoke;
  overflow: hidden;

  .guide-light,
  .guide-dark {
    position: absolute;
    right: 0;
    width: 800px;
    height: 100%;
    pointer-events: none;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .mask-dart {
    position: absolute;
    right: 0;
    width: 80%;
    height: 100%;
    overflow: hidden;
  }
`
