 const arithemtic = require('../src/arithemtic.js');

 describe('Arithemtic module', () => {
     describe('param validation' , ()=>{
        //   what should these say no string all
    it(`add() disallows string`,() =>{
        // expect  run this and actually does the test we pass string and not allow to sum string and number 
        expect(arithemtic.add('foo', 4)).toBeNull();
    })
            it(`add() disallows arrays`,() =>{
                expect(arithemtic.add([], 4)).toBeNull();
            

     })
     it(`add() disallows object `,() =>{
        expect(arithemtic.add({}, 4)).toBeNull();
     })

 })
 it(`add() disallows booleans `,() =>{
    expect(arithemtic.add(false, 4)).toBeNull();
 })
})
