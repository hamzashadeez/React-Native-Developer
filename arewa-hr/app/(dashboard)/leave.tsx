import { Text, View } from "react-native";

export default function Leave() {
  return (
    <View style={{ flex: 1 }}>
      {/* header section*/}

      <View
        style={{
          height: 150,
          padding: 20,
          backgroundColor: "purple",
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginBottom: 10,
          }}
        >
          Leave Summary
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>Submit Leave </Text>
      </View>
      {/* end of header section */}

      {/* card */}
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 20,
          marginTop: -50,
          padding: 20,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Total Leave
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Period 1 Jan 2024 - 31 Dec 2024
        </Text>

        {/* two cards in a row */}
        <View style={{ flexDirection: "row", marginTop: 20, gap: "2%" }}>
          <View
            style={{
              backgroundColor: "#FFF4E5",
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
              width: "48%",
              borderColor: "orange",
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: "orange",
                borderRadius: 5,
                marginBottom: 10,
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Leave Used</Text>
              <Text style={{ fontSize: 20}}>2</Text>
            </View>
          </View>
            <View
              style={{
                backgroundColor: "#E6F4EA",
                padding: 10,
                borderRadius: 10,
                marginRight: 10,
                width: "48%",
                borderColor: "seagreen",
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                
                gap: 13,
              }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "seagreen",
                  borderRadius: 5,
                  marginBottom: 10,
                }}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Available</Text>
                <Text style={{ fontSize: 20,}}>14</Text>
              </View>
            </View>
        </View>
      </View>

      {/* end card */}
      <Text>Leave</Text>
    </View>
  );
}
