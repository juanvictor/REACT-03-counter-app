// import moduleName from '@testing-library/jest-dom/extend-expect';  // Por defecto React

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({mode: 'deep'}) );
