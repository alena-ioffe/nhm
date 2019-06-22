import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterTabsComp extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button badge vertical>
            <Badge info>
              <Text>5</Text>
            </Badge>
            <Icon name="apps" />
            <Text>Levels</Text>
          </Button>
          {/* <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button> */}
          <Button active badge vertical>
            <Badge warning>
              <Text>51</Text>
            </Badge>
            <Icon active name="navigate" />
            <Text>Rewards</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Account</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

// footerDefaultBg="#3371B6"
