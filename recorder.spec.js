const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Continue with Google' }).click();
  await page.getByLabel('Email or phone').fill('hemalatha@echortech.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').fill('8919203217');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.goto('https://accounts.google.co.in/accounts/SetSID?ssdc=1&sidt=ALWU2ctjIkRmQWzso1d4HxbpakNgqzm8vxeLI1gnht5J0Vj08lGdlE3Bx6JVZ1xWYIWWWwxFLEGlIA6DLB3i4TWU48kMdwW0GbQ6z%2BECQz/TDpE/jh7NP3mpUyNvT9zP%2BZMNkJSwxcdnjHaondF57oc4xjtoCY4TSw0e0EM737762NI81q56J4WqaIZO2XhPoD9ONiXjU0FFb6f4lA8V8g4Yrm6O37SG8Hg6wChOll/njMJHN0CwCaMG0F5WNrIsyBAS4LMINXLwHCct5b9vQ1wjgsNhLf%2B4ifg0c079U6bemKh4Kf%2BcpZWX7Uo2BqECqpBT54ZZ%2B888qOW8O0OJLC8CrJyWiVYg5Y8T8pOZIfa1qH1D0HG5BLEgKBCyhGJmhuXmqiTjVT2KYE8JM/A6nZqxrrCxhw2vvdbrZNu0I66sqmmbLBcA4mwQMlsD3ZjV81gH2ZIHwqA2mNyVSFkow%2BzSqQ2rDAui6g%3D%3D&continue=https://accounts.google.com/signin/oauth/consent?authuser%3D0%26part%3DAJi8hAOAoKQNOClnc0sea-1SwnNEUpR0mKpW6sd8nS-fP0KmxY5LT9SMCHho_D0ja9qJ-Qzqc4D6KnYoHb8Z2Sua0IVubZ4I4lxowPdwBPgxy_bXu2aVwW7Nj2VNt7S0St5abaH9ytnygiAsIaHq7y1tfsg9-zRKcZXwppk0gheJuSNJXtvFF731MGsbUutH1uZI5V5hX7_kjH5VAWzJAYJ803431FLrbE8lNyaSkjwqqysrUAjAzMqDKj8zEjIFeZ6hhz2_tu15pC85MOP0iA4Sbl8yIXxv1MOrTZQfOG0WLFSC30mHEKNfzRn5l-ENN9qyelVh_nKSduuu5UE0Uvqi632wi4RSJf6dRBjqixfOr9xnvSlnHHI3ob3LhoVhLZlQ1OJ0wDVGwWNWkcg_r_YFGPjRHV0t_1eOWM9ooRosKP6RVksc9f17_SWt55kUovimfj370p-TJPo0NwJXH73AEMVaFATl3-ylq3B9o1tK0dEWNnaNSws%26as%3DS33758525%253A1703763786196158%26client_id%3D1019777921801-92o9d3df9pqf6dqudhunjbb4u3t4d88j.apps.googleusercontent.com%26theme%3Dglif%26rapt%3DAEjHL4NKKjvrjRWr_IuX9kDD6bVYaaSqawCaalRxpzIH2G2Xi-yHNAb6-BG5_CyGbFuVU83J_I910U2ctMR4wKoYYfU-7wecNbMODQ3AWrt6w7nf2o4El-s%23&tcc=1');
  await page.goto('https://accounts.google.co.in/accounts/SetSID');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/#access_token=eyJraWQiOiJPWVA5cWRKc21HY2JPRHpGM2xkcUFkKzhcL3lDMm9rMVh4aDJoOXNGbjhwcz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwMDFjMmVhYy0wOWNlLTRmZjUtODJiNi05OGIxYjYxNTE1MmEiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfWkNlR0lwRVdHX0dvb2dsZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9aQ2VHSXBFV0ciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0NmhjMHVxY211bmNoM2tkOHZkZGhzcG8waCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNzAzNzYzODQxLCJleHAiOjE3MDM4NTAyNDEsImlhdCI6MTcwMzc2Mzg0MSwianRpIjoiNWZkOTg4ZTgtN2ZlNy00YjE1LWJlN2ItOTM4MWM1NzIxNzA5IiwidXNlcm5hbWUiOiJHb29nbGVfMTA2NDQzMDg5NTk2NTg0OTM3MjIwIn0.C4eYjUenTRYjCT_mZl7YAKj5xv6W-tyGuQkrF5Dw51Hj8HeBzoNDv31iPAa3VNV7QLSvg-4ZZOTJYd-O0SUrM4maAPAnqi74Mjza4wuJHOV2x6lgu7WxlD9jnsOMGXyDozx5Qwfm-911kUz2ySYc41y4mY4e-8fKQj-wUpxfwc45b5JeLnpfanOgKOUPOarmux1Ig38JkVPamLnirhpE5NdDmBIaL6IzhpEG0sTt3DI8POOTMDm8rFU0vGQAQXE2BWhgxPTD3-MdKfBft_-xRWgml05QaNiyoBmoiGQkaEiHYWlz8dFh20M9a0vfdQ93zvfdiCtOfD20RUXJnBTwaA&id_token=eyJraWQiOiI0T25lOFZtOExrSmIwMHpwdlRcL0UxOFhiMk9Dc3B6Q1BRbVd6OUtoXC9JXC9rPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoibmdzczRxeDExRlJpUFhtNmhxQ2ttQSIsInN1YiI6IjAwMWMyZWFjLTA5Y2UtNGZmNS04MmI2LTk4YjFiNjE1MTUyYSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9aQ2VHSXBFV0dfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfWkNlR0lwRVdHIiwiY29nbml0bzp1c2VybmFtZSI6Ikdvb2dsZV8xMDY0NDMwODk1OTY1ODQ5MzcyMjAiLCJub25jZSI6InozTnVVcHJicHJYX1pFTWd4TW5OMnI1ZFV1MHBkY2N0dmtJQXp4RE1BM3g5QW5NblNRNTFOUjlETnp0V1BzTmIwRlJudUx1a0JYdmoweldrNjJsaFdaQWk4QVN5SmR4ZXBvN3lmQnpJRXowYkM3UjFzWmZPWTZkU1dzQm1ZNERvNVhteUZseXpzQVhTZzVWX0tVbml5VWkyR1pGc3ZTUzBSLTI2RHRXb1paTSIsImF1ZCI6IjQ2aGMwdXFjbXVuY2gza2Q4dmRkaHNwbzBoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2NDQzMDg5NTk2NTg0OTM3MjIwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTcwMzc1NTA4MzI5MyJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MDM3NjM4NDEsImlkIjoiNWExMDEwZWQtNDVkYy00MzcwLTg5ZmQtMWY1MmUxNzQ3ZTQ2IiwiZXhwIjoxNzAzODUwMjQxLCJpYXQiOjE3MDM3NjM4NDEsImp0aSI6IjlmOTdiYmJhLTcyZTItNDViOC04OWJmLTI4YjNiNDgxYmVlOCIsImVtYWlsIjoiaGVtYWxhdGhhQGVjaG9ydGVjaC5jb20ifQ.rTUrUdFwydXioYEsR14bxOOiuDfKgi8fguNVuwTE8vgMXhAZEfAYvsMNSMuIulI_kAMAbR0QemwSBSYzDy8PuwW5CtrHxhivSq1v_UycN7q3UN5PB0iRofdin8ziAXy0NAxGSSYVGPrN5WRsYjrEDiKoR8gtynh-lxS_QaLg-P5UbR74JQybjceyPezKGi4Yv_aeDKQ0K3MwzcrhAABdV3laYVPdvWHTfjVmznKER-Yb-FxrN6sUwMCMLkAZt2Srpu7i5F65pZQjKIO2g7Au2uJiWZ8M3elvp4QeZoQeDKTdBC13fClv0iaGdmGlQbwiadBGz7Mr-VJIrRY0_VoZgw&state=9uw3sWQqApciCXunr0RwcQTI8Y4rlDoi&token_type=Bearer&expires_in=86400');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login/');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');
  await page.locator('html').click();

  // ---------------------
  await context.close();
  await browser.close();
})();