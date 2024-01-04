import { test } from '@playwright/test'
test.skip('Test One',async({page})=>{
});
test('Test Two',async({page})=>{
    test.fail()
});
test.fixme('Test Three',async({page})=>{
});
// test.only('Test Four',async({page})=>{
//     test.slow();
// });
test('Test login @smoke',async({page})=>{

});