import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Spinner } from 'native-base';
import { firebaseApp } from '../../../firebase/firebaseConfig.js'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.itemRef = firebaseApp.database();
  }
  listenForItem = () => {
    var dt = [];
    this.itemRef.ref('DacSan').on('child_added', (dataSnapshot) => {
      dt.push({
        name: dataSnapshot.val().TenDS,
        key: dataSnapshot.key
      });
      this.setState({
        data: dt
      })
    })
  }
  componentDidMount = () => {
    this.listenForItem(this.itemRef);
  }
  render() {
    return (
      <View style={{ backgroundColor: '#E6E6E6' }}>
        {
          this.state.data.map((item, index) => {
            return <Text>{item.name}</Text>
          })
        }
      </View >
    );
  }
}
export default Index;
// const data = [];
  // //child("child_added")
  // const itemRef = firebaseApp.database();
  // //useEffect(() => {
  // itemRef.ref('DacSan').on('child_added', (dataSnapshot) => {
  //   data.push({
  //     name: dataSnapshot.val(),
  //     key: dataSnapshot.key
  //   });
  // })
  // console.log(data);
  // //});


// import React, { Component, useState } from 'react';
// import { View, Text, ListView } from 'react-native';
// import { firebaseApp } from '../../../firebase/firebaseConfig.js'
// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.itemRef = firebaseApp.database();
//     this.state = {
//       dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
//     }

//   }
//   listenForItem(itemRef) {
//     var items = [];
//     this.itemRef.ref('DacSan').child('ThongTinDacSan').on('child_added', (dataSanshot) => {
//       items.push({
//         name: dataSanshot.val(),
//         key: dataSanshot.key
//       });
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRows(items)
//       })
//     })
//   }
//   componentDidMount() {
//     this.listenForItem(this.itemRef);
//   }
//   render() {
//     var items = [];
//     var itemRef = firebaseApp.database();
//     itemRef.ref('DacSan').child('ThongTinDacSan').on('child_added', (dataSanshot) => {
//       items.push({
//         name: dataSanshot.val(),
//         key: dataSanshot.key
//       });
//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRows(items)
//       })
//     })
//     return (
//       <View>

//       </View >
//     );
//   }
// };
// export default Index;

