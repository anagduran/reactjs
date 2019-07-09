import React from 'react';
import {shallow} from 'enzyme';
import RepositoryList from './RepositoryList';
import Adapter from 'enzyme-adapter-react-15';


describe('RepositoryList', ()=> {
    it('Should render a loading message', ()=>{
        const repositoryList = shallow(<RepositoryList data = {[]} total={0} loading={true} queried={false} search={'test'}  />)
    
        expect(repositoryList.find('HintMessage').length).toEqual(1);
    });


})