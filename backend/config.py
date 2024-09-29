from configparser import ConfigParser

def config(filename="database.ini", section="postgresql"):
    # create a parser
    parser = ConfigParser()
    # read config file
    parser.read(filename)
    # creation of dict and addition of the data in it
    details_dict = {}

    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            details_dict[param[0]] = param[1]
    else:
        raise Exception('Section {0} is not found in the {1} file.'.format(section, filename))
    
    return details_dict