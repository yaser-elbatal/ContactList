import { ListRenderItem, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Contacts from 'react-native-contacts';
import { List, Loader, MainText } from '../../components';
import { ContactCard } from '../../content';
import { styles } from './styles';
import SearchInput from '../../components/input/SearchInput';
import SearchSVG from '../../assets/icons/search.svg'
import { PermissionsContact, moderateScale, scale } from '../../utils';
import CloseSVG from '../../assets/icons/close.svg'
import { useAppSelector } from '../../store/hooks';



export const ContactsList = () => {

    const [userContacts, setUserContacts] = useState<Contacts.Contact[] | null>(null);
    const [search, setSearch] = useState('')
    const { favList } = useAppSelector((state) => state.favContactReducer)

    //call permission to be able to load contacts
    const PermissionsContacts = () => {
        try {
            PermissionsContact().then((val) => {
                if (val) {
                    loadContacts()
                }
            })
        } catch (error) {
            console.log('error', error);

        }
    }

    //load Contact after permssion
    const loadContacts = useCallback(() => {
        Contacts.getAll().then(contacts => {
            setUserContacts(contacts);
        });
    }, []);

    useEffect(() => {
        PermissionsContacts()
    }, []);


    //group letter with card number
    const sections = useMemo(() => {
        if (!userContacts) {
            return null;
        }

        const sectionsMap = userContacts.reduce<Record<string, Contacts.Contact[]>>(
            (acc, contact) => {
                const { displayName } = contact;
                const [firstLetter] = displayName;

                return Object.assign(acc, {
                    [firstLetter]: [...(acc[firstLetter] || []), contact],
                });
            },
            {},
        );
        return Object.entries(sectionsMap)
            .map(([letter, items]) => ({
                letter,
                items: items.sort((a, b) => a.displayName.localeCompare(b.displayName)),
            }))
            .sort((a, b) => a.letter.localeCompare(b.letter));
    }, [userContacts]);


    // Search
    const onSearch = useCallback(
        (text: any) => {
            setSearch(text);
            const phoneNumberRegex =
                /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
            const emailAddressRegex =
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if (text === '' || text === null || search == "") {
                loadContacts();
            } else if (phoneNumberRegex.test(text)) {
                Contacts.getContactsByPhoneNumber(text).then(contacts => {
                    setUserContacts(contacts);
                });
            } else if (emailAddressRegex.test(text)) {
                Contacts.getContactsByEmailAddress(text).then(contacts => {
                    setUserContacts(contacts);
                });
            } else {
                Contacts.getContactsMatchingString(text).then(contacts => {
                    setUserContacts(contacts);
                });
            }
        },
        [search],
    );


    //render Card Number
    const renderItem: ListRenderItem<any> = useCallback(({ item, index }) =>
        <View style={styles.section} key={item?.letter}>
            <Text style={styles.sectionTitle}>{item?.letter}</Text>
            <View style={styles.sectionItems}>
                <ContactCard
                    item={item?.items}
                />
            </View>
        </View>,
        [])




    if (!sections) {
        return (
            <Loader />
        );
    }

    return (
        <View style={styles.containers}>
            <View style={styles.header}>
                <MainText title={'Contacts'} style={styles.title} />
            </View>
            <SearchInput
                options={{ placeholder: 'Search' }}
                rightContent={<SearchSVG />}
                onChangeText={(e: any) => onSearch(e)}
                returnKeyType={'done'}
                value={search}
                style={{ marginHorizontal: scale(10), alignSelf: 'center', }}
                leftContent={search.length > 0 ? <CloseSVG /> : <View />}
                onPressleftIcon={() => {
                    setSearch("")
                    loadContacts();
                }}
            />

            <View style={styles.containers}>

                <List
                    data={sections}
                    renderItem={renderItem}
                    refreshing={false}
                    initialNumToRender={10}
                    maxToRenderPerBatch={9}
                    removeClippedSubviews={true}
                    ListHeaderComponent={
                        <>
                            <MainText title="Favourites"
                                style={styles.fav}
                            />
                            <ContactCard
                                item={favList}
                                cardStyle={{ marginHorizontal: scale(10), marginTop: 0 }}
                                isIcon={false}
                            />
                        </>

                    }
                />
            </View>
        </View>
    );
}

