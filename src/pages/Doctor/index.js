import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  DoctorCategory,
  Gap,
  GoodNewsItem,
  HomeProfile,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <GoodNewsItem />
          <GoodNewsItem />
          <GoodNewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  welcome: {
    marginBottom: 16,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    width: 209,
  },
  category: {flexDirection: 'row'},
  scrollWrapper: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
