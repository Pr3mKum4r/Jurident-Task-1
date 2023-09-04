// src/DarkModeToggle.js
import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}

export default DarkModeToggle;
