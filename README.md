# React Anmiatoin Gallery

## Table of content

 - [Animations](#animations)
  - [Framer Motion](#framer-motion)
    - [Layout](#layout)

## Animations

### Framer Motion

#### Layout

import some objects

```
import {
  motion,
  LayoutGroup,
  LazyMotion, domAnimation, m,
  useScroll, useSpring
} from 'framer-motion';
```

set spring and useState

```
const [isOn, setIsOn] = useState(false);
const toggleSwitch = () => setIsOn(!isOn);

const layout_spring = {
  type: "spring",
  stiffness: 2000,
  damping: 60
};
```

set element

```
<div
  className="switch"
  data-isOn={isOn} onClick={toggleSwitch}
>
  <motion.div className="handle" layout transition={layout_spring} />
</div>
```

set style

```
.switch {
    width: 70px;
    height: 40px;
    background-color: rgba(0, 255, 0, 0.4);
    display: flex;
    border-radius: 50px;
    padding: 5px;
    cursor: pointer;
    border:none;
}

.switch[data-isOn="false"] {
    justify-content: flex-start;
}

.switch[data-isOn="true"] {
    justify-content: flex-end;
}
```