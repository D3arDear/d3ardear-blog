import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  padding: 20px;
  width: 100%;
  top: 0;
  z-index: 10;
`;
export const HeaderAction = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  flex: 1;
  top: 0;
  color: white;
`;
