import enLocale from 'element-plus/lib/locale/lang/en'

const messages = Object.assign(enLocale, {
  lang: 'Lang',
  langName: 'English',
  messages: {
    loginSuccess: 'Login successfully',
    loginFailed: 'Login failed',
    loginInvalid: 'loginNo and password do not match',
    logoutConfirm: 'Confirm to logout current system ?',
    requestFailed: 'Request failed',
    validateFailed: 'Validate failed',
    failed403: 'Request rejected, may not have permission, please contact the system administrator',
    failed404: 'Resource is not find',
    leavePage: 'The data entered will be lost. Are you sure to close?',
    allPages: 'All Pages',
    otherPages: 'Other Pages',
    requestSuccess: 'Request Successfully',
    createSuccess: 'Create Successfully',
    saveSuccess: 'Save Successfully',
    updateSuccess: 'Update Successfully',
    deleteSuccess: 'Delete Successfully',
    changedPassword: 'You have changed your password. Please log in again.',
    tableNoData: 'No data found',
    tableDataCannotDel: 'This data cannot be deleted',
    selectDataForDelete: 'Please select the data you want to delete',
    deleteDataConfirm: 'Are you sure to delete the selected data ?',
    modifyLoginNo: 'Modifying the loginNo will reset the password. Do you want to continue ?',
    resetPassword: 'Are you sure you want to reset the selected user password ?',
    refreshServiceConfirm: 'Are you sure to refresh the service configuration information ? The specified service retrieves configuration information from the configuration center',
    refreshRouteConfirm: 'Are you sure to refresh gateway routing information ?',
    deployWorkFlowConfirm: 'Are you sure to deploy the workflow definition ?',
    executeDeployConfirm: 'Are you sure to deploy the task？'
  },
  pageTitle: {
    test: 'test',
    E404: '404',
    E500: '500',
    login: 'login',
    passwordExpire: 'Password Expire',
    home: 'home',
    personalInformation: 'Personal Information Configure',
    routeConfig: 'Route Configure',
    routeLog: 'Route Log',
    logFile: 'Log File',
    operateLog: 'Operate Log',
    loginLog: 'Login Log',
    appConfig: 'Application Configure',
    authConfig: 'Authority Configure',
    orgConfig: 'Organization Configure',
    runtimeConfig: 'Parameter Configure',
    roleConfig: 'Role Configure',
    userConfig: 'User Configure',
    workflowDeploy: 'WorkFlow Deploy',
    workflowManager: 'WorkFlow Manager',
    deploy: 'deploy'
  },
  common: {
    exit: 'Exit'
  },
  dialog: {
    info: 'Message',
    error: 'Error message',
    warning: 'Warning message',
    success: 'Success',
    confirm: 'Please confirm'
  },
  home: {
    fullScreen: 'FullScreen',
    exitFullScreen: 'Exit FullScreen',
    personalInformation: 'Personal Information',
    logout: 'logout',
    closeAll: 'Close All',
    closeOther: 'Close Other'
  },
  errorPage: {
    message404: 'Page not found',
    description404: '',
    message500: 'Internal Server Error',
    buttons: {
      back: 'back',
      home: 'home',
      login: 'login'
    }
  },
  forms: {
    scriptFile: 'Script File',
    serverIpRegex: 'Server Ip Regex',
    loginStatistics: 'Login statistics',
    numberOfOnlineUsers: 'Number of online users',
    changePassword: 'Change Password',
    pleaseEnter: 'Please enter ',
    loginNo: 'loginNo',
    password: 'password',
    rememberMe: 'remember me',
    avatar: 'avatar',
    avatarUpload: 'Avatar Upload',
    name: 'name',
    profile: 'profile',
    label: 'label',
    key: 'key',
    code: 'code',
    sort: 'sort',
    level: 'level',
    parent: 'parent',
    userList: 'user list',
    roleList: 'role list',
    selected: 'selected',
    optional: 'optional',
    value: 'value',
    mobile: 'mobile',
    describe: 'describe',
    remarks: 'remarks',
    info: 'info',
    action: 'action',
    invalid: ' is invalid',
    enabled: 'enabled',
    disabled: 'disabled',
    notEmpty: ' can not be empty',
    incorrect: ' is incorrect',
    width: 'Width',
    height: 'Height',
    old: 'Old ',
    new: 'New ',
    confirmPassword: 'Confirm password',
    lengthNotEnough: 'Length Not Enough',
    incorrectFormat: 'Incorrect Format',
    passwordNotEqual: 'Confirm password is not equal new password',
    scope: 'scope',
    accessTokenValiditySeconds: 'token validity',
    refreshTokenValiditySeconds: 'refresh Token validity',
    seconds: 'seconds',
    millisecond: 'millisecond',
    organization: 'Organization',
    role: 'Role',
    menu: 'Menu',
    clientName: 'Client Name',
    user: 'User',
    moduleFunc: 'ModuleFunction',
    basicInfo: 'Basic Info',
    menuList: 'menu list',
    moduleFuncList: 'ModuleFunc list',
    orgList: 'organization list',
    orgMngList: 'Administrable organization',
    iconType: 'icon',
    path: 'path',
    openType: 'open type',
    inner: 'inner',
    newTabs: 'new tabs',
    status: 'status',
    startDate: 'Start Date',
    endDate: 'End Date',
    startDateCantGreaterThenEndDate: 'Start date should not be greater than end date',
    routeId: 'Route Id',
    uri: 'uri',
    predicates: 'predicates',
    filters: 'filters',
    metadata: 'metadata',
    remoteIp: 'remote ip',
    gatewayIp: 'gateway ip',
    serverId: 'server id',
    targetUri: 'target uri',
    requestTime: 'request time',
    processTime: 'process time',
    responseTime: 'response time',
    responseStatus: 'response status',
    historyInfo: 'history',
    currentInfo: 'current',
    infoType: 'info type',
    targetIp: 'target ip',
    targetPath: 'target path',
    method: 'method',
    token: 'token',
    clientId: 'client id',
    identify: 'identify',
    userName: 'user name',
    configRefreshServer: 'server name',
    configRefreshMatcher: 'matcher',
    configRefreshMatcherDescribe: 'Please enter the matching expression of the service ID below (the fuzzy matching can be used "**"). The service ID format is as follows:',
    configRefreshAll: 'all servers',
    resourceName: 'resource name',
    content: 'content',
    version: 'version',
    createTime: 'create time',
    modifyTime: 'modify time',
    deployTime: 'deploy time',
    execTime: 'execute time',
    execUserName: 'execute user',
    createUserName: 'create user',
    processKey: 'workflow key',
    processInstanceId: 'workflow instance id',
    processBusinessKey: 'business key',
    flowStatus: 'workflow status',
    running: 'running',
    ended: 'ended',
    beginTime: 'begin time',
    finishTime: 'finish time',
    flowName: 'workflow name',
    title: 'title',
    description: 'description',
    deleteReason: 'delete reason',
    startUser: 'start user',
    currentUser: 'current user',
    processUser: 'process user',
    isPass: 'is pass',
    isFinished: 'is finished',
    yes: 'yes',
    no: 'no',
    processActivityRecords: 'workflow activity records',
    comment: 'comment',
    processParams: 'workflow params',
    type: 'type',
    processFile: 'workflow file',
    filterKey: 'filter key',
    area: 'area',
    buttons: {
      login: 'login',
      submit: 'submit',
      search: 'search',
      edit: 'edit',
      update: 'update',
      save: 'save',
      delete: 'delete',
      cancel: 'cancel',
      add: 'add',
      newFold: 'new fold',
      reset: 'reset',
      upload: 'upload',
      view: 'view',
      image: 'image',
      free: 'Free',
      updateSecret: 'update secret',
      select: 'select',
      deSelect: 'Deselect',
      refresh: 'Refresh',
      resetPwd: 'reset password',
      refreshService: 'refresh services',
      refreshRoute: 'refresh routes',
      chooseFile: 'choose file',
      downLoadFile: 'download file',
      fileManager: 'file manager',
      deploy: 'deploy',
      execute: 'execute',
      lastWeek: 'last week',
      lastMonth: 'last month',
      lastThreeMonth: 'last three month'
    }
  }
})

export default messages
