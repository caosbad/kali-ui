import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import AppContext from '../../context/AppContext'
import Layout from '../../components/structure/Layout'
import Proposals from '../../components/proposals/Proposals'
import NewProposal from '../../components/newproposal/NewProposal'
import Dashboard from '../../components/dashboard/Dashboard'
import ActionMenu from '../../components/structure/ActionMenu'
import Extensions from '../../components/extensions/Extensions'
import { VStack, Spacer, Link, Flex, Box } from '@chakra-ui/react'
import { BrowserView, MobileView } from 'react-device-detect'
import Consult from '../../components/consult/Consult'
import Services from '../../components/service/Services'

export default function Dao() {
  const value = useContext(AppContext)
  const { visibleView, daoChain, account } = value.state
  console.log('account', account)
  // * get DAO address from route * //
  const router = useRouter()
  const address = router.query.dao
  useEffect(() => {
    if (!address) {
      return
    } else {
      value.setAddress(address)
    }
  }, [address, value])

  return (
    <>
      <Layout draftActive={false}>
        <Flex
          w={['100%', '100%', '10%', '15%', '15%']}
          flexDir={['row', 'row', 'column', 'column', 'column']}
          alignItems="center"
          justifyContent="space-between"
          display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}
          mt={[0, 0, '10px', '10px', '10px']}
          mr={[0, 0, '10px', '10px', '10px']}
        >
          <ActionMenu />
        </Flex>
        <Box w={['100%', '100%', '90%', '85%']}>
          {daoChain == null ? null : (
            <>
              {visibleView == 1 ? (
                <Dashboard />
              ) : visibleView == 2 ? (
                <Proposals />
              ) : visibleView == 3 ? (
                <NewProposal />
              ) : visibleView == 4 ? (
                <Extensions />
              ) : visibleView == 5 ? (
                <Consult />
              ) : visibleView == 6 ? (
                <Services />
              ) : null}
            </>
          )}
        </Box>
      </Layout>
      <Box
        id="mobile-menu"
        display={{
          base: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
          '2xl': 'none',
        }}
      >
        <ActionMenu />
      </Box>
    </>
  )
}
