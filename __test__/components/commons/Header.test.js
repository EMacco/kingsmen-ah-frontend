import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from '@components/commons/Header/index';
import { Provider } from 'react-redux';
import { logo } from '@base/img/logo.png';

const props = {
  user: {
    isAuthenticated: true,
    username: 'kingsmen'
  },
  profile: {
    firstname: 'Kings',
    lastname: 'men',
    avatar: logo
  }
};


const mockStore = configureStore([thunk]);

const store = mockStore({
  auth: {
    profile: {},
    user: {},
    isAuthenticated: false,
    errors: []
  },
});

const setup = () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Header {...props} />
    </Provider>
  );
  return wrapper;
};

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it("should show Author's Haven as title", () => {
    const header = wrapper.find('h1');
    expect(header.exists()).toBe(true);
    expect(header.text()).toEqual('Author‘s Haven');
  });

  it('should have login button in header', () => {
    const button = wrapper.find('Button').first();
    expect(button.exists()).toBe(true);
    expect(button.props().children).toEqual('Sign In');
  });

  it('should have logout button in header', () => {
    const button = wrapper.find('Button').at(1);
    expect(button.exists()).toBe(true);
    expect(button.props().children).toEqual('Get Started');
  });

  it('should render the Header component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Header')).toBeTruthy();
    wrapper.find('button').first;
  });
});
