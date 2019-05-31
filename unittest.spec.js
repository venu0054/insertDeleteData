import Vue from 'vue'
import App from 'path/to/App.vue'

describe('App', () => {
  // Below unit test code is for insert operation 
  it('performing a insert function', () => {
    expect(typeof App.insertOperation).toBe('keyup')
    const defaultData = App.data()
    expect(defaultData.record).toBe('Learn Vue')	
  })
  
  // Below unit test code is for delete operation   
   it('Delete data on click', () => {
    expect(typeof App.deleteOperation).toBe('click')
    const clickData = App.data()
    expect(defaultData.record).toBe('')
  })
})