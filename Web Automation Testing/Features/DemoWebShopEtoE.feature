Feature: Demo Web Shop End to End

@DemoWebShop
Scenario: Successful login and purchase workflow
  Given open the Demo Web Shop login page
  When login with valid credentials
  And navigate to Desktops under Computers
  And sort products by "Name: Z to A"
  And add the expensive product to the cart
  And open the cart and proceed to checkout
  Then should see the logout button