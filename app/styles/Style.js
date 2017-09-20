import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    elevation: 0,
    height: 56,
    marginTop: Platform.OS === 'ios' ? 78 : 62,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    borderBottomWidth: 3.5,
    borderBottomColor: '#d70000',
  },
  headerWithoutBreadcrumb: {
    backgroundColor: '#fff',
    borderBottomWidth: 3.5,
    borderBottomColor: '#d70000',
  },
  headerTitle: {
    color: '#546E7A',
    alignSelf: 'center',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  contents: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -60,
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  contentsIncludeScrollView: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -60,
    paddingHorizontal: 10,
  },
  scrollViewContents: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  contentsWithoutBreadcrumb: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  scrollViewContentsWithoutBreadcrumb: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
})
