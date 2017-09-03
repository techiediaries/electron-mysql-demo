angular.module('ngApp.services', [])
.factory('SQLService',function(){
  
  var mysql      = require('mysql');
  var connection ;
  return {
    connect : function(info){
      
      connection = mysql.createConnection(info);

      connection.connect();


    },
    test : function(){

      connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
      });

    },
    close : function(){
      connection.end();       
    },
    find : function(table,offset,limit){

    }
  }
})
.factory('DBService',function(SQLService){
    
    this.pageSize = 10;
    this.offset = 0;
    this.limit = 10;
    var self = this;    
    
    function size(table){

    }
    function find(table,offset,limit){
        return SQLService.find(table,offset,limit);
    }
    return {
      connect : function(info){
        SQLService.connect(info);
        SQLService.test();
      },
      getPager: async function(table,pageSize)
      {
          
          self.pageSize = pageSize;
          self.limit = self.pageSize;
          self.size = await size();
          var o =  {
              
              initialPage:function(){

                return find(table,self.offset,self.limit);
              },
              prevPage:function(){
                if(self.offset > 0 )
                { 
                  self.offset -= self.pageSize;
                } 
                 return find(table,self.offset,self.limit);         
              },
              nextPage:function(){
                  if(self.offset  + self.limit <= self.size )
                  {  
                    self.offset +=  self.pageSize;
                  }
                  return find(table,self.offset,self.limit);  
              }
          }
          return o;
          
      }        
    }
});
