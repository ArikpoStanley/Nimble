import React from 'react'
import {Text, Image, Button, View, TouchableOpacity, Switch} from 'react-native'
import verified from "../../../assets/verified.png"
import FontAwesome from '@expo/vector-icons/FontAwesome';
const SectionTitle = ({title}) =>{
  return(
    <View style={{marginTop: 10}}>
      <Text style={{color: "gray", fontSize: 20, textTransform: 'uppercase'}}>{title}</Text>
    </View>
  )
}

const Setting = ({title, value, type, onPress}) =>{
  if(type == "button"){
    return(
      <TouchableOpacity style={{display: "flex", flexDirection: "row", height: 50, alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#36454F"}} onPress={onPress}>
        <Text style={{color: "white", flex: 1, fontSize: 15}}>{title}</Text>
        
        <View style={{display: "flex", flexDirection: "row", height: 50, alignItems: "center", gap: 10}}>
          <Text style={{color: "gray"}}>{value}</Text>
          <FontAwesome name="angle-right" size={24} color="gray" />
        </View>
      </TouchableOpacity>
    )
  }
  else{
    return(
         <View style={{display: "flex", flexDirection: "row", height: 50, alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#36454F"}} onPress={onPress}>
        <Text style={{color: "white", flex: 1, fontSize: 15}}>{title}</Text>
        
        <Switch value={value}
        onValueChange={(value) => onPress(value)}/>
      </View>
    )
  }
}
const Profile = () => {
  const [faceid, setFaceid] = React.useState()
  return (
    <View style={{padding: 10,}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize: 30, marginBottom: 20}}>Profile</Text>
{/* Email and user id */}
        <View style={{display:'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <View>
          <Text style={{color: "white"}}>arikpostanley123@gmail.com</Text>
          <Text style={{color: "gray"}}>ID: 3923JAI</Text>
          </View>
          <View style={{display:'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Image source={verified} style={{height: 22, width: 22}}  alt='verified'/>
          <Text style={{color: "lightgreen"}}>Verified</Text>
          </View>
        </View>
        <SectionTitle title={"App"}/>
        <Setting 
        title="Launch Screen"
        value="Home"
        type="button"
        onPress={() => console.log("Pressed")
        }
        />

        <Setting 
        title="Appearance"
        value="Dark"
        type="button"
        onPress={() => console.log("Pressed")
        }
        />

<SectionTitle title={"Account"}/>

<Setting 
        title="Payment Currency"
        value="USD"
        type="button"
        onPress={() => console.log("Pressed")
        }
        />
        <Setting 
        title="Language"
        value="English"
        type="button"
        onPress={() => console.log("Pressed")
        }
        />
        <Setting 
        title="KYC"
        value="20% Incomplete"
        type="button"
        onPress={() => console.log("Pressed")
        }
        />

<SectionTitle title={"security"}/>

        <Setting 
        title="FaceID"
        value={faceid}
        type="switch"
        onPress={(faceid) =>setFaceid(faceid)
        }
        />
        <Setting 
        title="Paswword Settings"
        value=""
        type="button"
        onPress={() => console.log("Pressed")
        }
        />
        <Setting 
        title="Change Password"
        value="*********"
        type="button"
        onPress={() => console.log("Pressed")
        }
        />

        <Setting 
        title="@ Factor Authentication"
        value=""
        type="button"
        onPress={() => console.log("Pressed")
        }
        />
    </View>
  )
}

export default Profile