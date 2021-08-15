import '../../.linaria-cache/libs/ui/src/components/button/Button.linaria.module.css';
import '../../.linaria-cache/libs/ui/src/components/button/PrimaryButton.linaria.module.css';
import React from 'react';
import { Meta } from '@storybook/react';

export default {
  title: 'Modules',
} as Meta;
import { PrimaryButton } from '../components/button/PrimaryButton';
import { Spaces } from '../components/space/Spaces';
import { HStack } from '../components/stack/HStack';
import { VStack } from '../components/stack/VStack';
import { Text } from '../components/text/Text';

export const Root = (args: any) => {
  return (
    <>
      <Text size="lg">Text that is large</Text>
      <PrimaryButton onPress={() => console.log('hi')}>Click me</PrimaryButton>
      <VStack {...args} spacer={Spaces[4]}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </VStack>
      <div style={{ marginBottom: '50px' }} />
      <HStack {...args} spacer={Spaces[4]}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </HStack>
    </>
  );
};
