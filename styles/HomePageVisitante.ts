import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gradient: {
    flex: 1,
    marginBottom: -40,
    marginTop: -50,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
    paddingVertical: 26,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  greeting: {
    fontSize: 24,
    color: '#ffff',
    fontFamily: 'inter-medium',
  },
  userName: {
    fontSize: 24,
    color: '#032D45',
    fontFamily: 'inter-bold',
  },
  location: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 5,
  },
  icon: {
    width: 60,
    height: 60,
    marginTop: 35,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 12,
    marginTop: 80,
    //marginBottom: 18,
    alignSelf: 'center',
    width: '90%',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'inter-black',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#14E2C3',
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});