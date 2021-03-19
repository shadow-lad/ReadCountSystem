package com.shardav.readcountsystem.generator;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.UUIDGenerator;

import java.io.Serializable;
import java.nio.ByteBuffer;
import java.util.Base64;
import java.util.UUID;

public class StoryIDGenerator extends UUIDGenerator {

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
        UUID uuid = UUID.fromString(super.generate(session, object).toString());

        ByteBuffer buffer = ByteBuffer.allocate(16).putLong(uuid.getMostSignificantBits()).putLong(uuid.getLeastSignificantBits());

        return Base64.getEncoder().encodeToString(buffer.array())
                .replaceAll("\\+", "-")
                .replaceAll("/", "_")
                .replaceAll("=", "");
    }
}
