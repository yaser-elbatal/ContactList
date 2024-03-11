import React, { useCallback } from "react";
import { FlatList, RefreshControl, ActivityIndicator, } from "react-native";
import { colors, moderateScale } from "../../utils";


type FlatListProp = React.ComponentProps<typeof FlatList>;

interface ListProp extends FlatListProp {
  data: any[],
  refreshing?: boolean,
  onRefresh?: () => void
  loadMore?: boolean,
  onEndReached?: () => void,
  ListFooterComponent?: any,
  renderItem: any
  extraData?: any,
  ListEmptyComponent?: any,
  props?: any,
  horizontal?: boolean,
  numColumns?: number,
  loader?: boolean,
  emptyMessage?: string,
}

export const List = ({
  data,
  renderItem,
  refreshing,
  onRefresh,
  loadMore,
  onEndReached,
  ListFooterComponent,
  extraData,
  ListEmptyComponent,
  horizontal = false,
  numColumns,
  loader,
  emptyMessage,
  ...props
}: ListProp) => {


  const renderFooter = () => {
    if (!loadMore) return null;
    return (
      <ActivityIndicator
        size={moderateScale(22)}
        color={colors.blue}
        style={{ marginBottom: moderateScale(10) }}
      />
    );
  };

  const keyExtractor = useCallback((item: any, index: any) => index.toString(), []);
  return (

    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      extraData={extraData}
      horizontal={horizontal}
      numColumns={numColumns}
      refreshControl={
        <RefreshControl
          refreshing={refreshing!}
          onRefresh={onRefresh}
          colors={[colors.blue, colors.gray, colors.lightGray]}
        />}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={ListFooterComponent || renderFooter}
      onEndReached={onEndReached && onEndReached}
      onEndReachedThreshold={0.4}


      {...props}

    />
  );
};
