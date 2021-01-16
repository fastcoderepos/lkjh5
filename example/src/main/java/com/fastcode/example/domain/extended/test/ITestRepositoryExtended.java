package com.fastcode.example.domain.extended.test;

import com.fastcode.example.domain.core.test.ITestRepository;
import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.stereotype.Repository;

@JaversSpringDataAuditable
@Repository("testRepositoryExtended")
public interface ITestRepositoryExtended extends ITestRepository {
    //Add your custom code here
}
