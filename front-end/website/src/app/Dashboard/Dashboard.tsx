import * as React from 'react';
import HoverableCard from '../HoverableCard';
import {
  Avatar,
  Brand,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonVariant,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavGroup,
  NavItem,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Title,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

/* const HoverableCard = () => (
  <Card isHoverable>
    <CardHeader>Header</CardHeader>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
 */
const Dashboard: React.FunctionComponent<{}> = () => (
  /*     
      <PageSection>
        <Title size="lg">Dashboard Page Title</Title>
      </PageSection>
   */
  <PageSection variant={PageSectionVariants.light}>
    <TextContent>
      <Text component="h1">Main Title</Text>
      <Text component="p">
        Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
        of it’s relative line height of 1.5.
      </Text>
    </TextContent>
    <Gallery gutter="md">
      {Array.apply(0, Array(10)).map((x, i) => (
        <GalleryItem key={i}>
          <HoverableCard number={i} />
        </GalleryItem>
      ))}
    </Gallery>

  </PageSection>

)

export { Dashboard };
