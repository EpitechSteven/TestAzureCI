import axios from 'axios'

export default {
  name: 'user',
  components: {},
  props: [],
  data () {
    return {
      username:'',
      email: '', 
      insert_at:'', 
      update_at:'', 
      element:'',
      dataBack:'', 

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    createUser: function(username, email){
      
      axios.get(`http://localhost:4000/api/users/create?user=`+ data)
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      this.errors.push(e)
    })
    },
    
    // updateUser: function(userID){

    // }, 

    getUser: function(username){
      axios.get(`http://localhost:4000/api/users/show?id=`+ username)
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      this.errors.push(e)
    })
    }, 
    
    deleteUser: function(userID){
      axios.delete("http://localhost:4000/api/users/"+userID)
                .then(function(response) {
                  // Refresh the page
                  document.location.reload(true);
                })
                .catch(function (error) {
                  console.log(JSON.stringify(error, null, 2));
                });    
    }
  }
}
