import React from 'react';
import {View, Dimensions} from 'react-native';

import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

import {useRoute} from '@react-navigation/native';

const SearchResults = (props) => {
  const route = useRoute();

  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;

//Via Transversal 3 los Llanos, 1, 38003 Santa Cruz de Tenerife, Spain