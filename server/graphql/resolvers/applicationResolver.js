const applicationResolvers = {
  Query: {
    getApplicationById: (parent, { id }, context, info) => {
      const application = applications.find(app => app.id === id);
      if (!application) {
        throw new ApolloError("Application not found", "APPLICATION_NOT_FOUND");
      }
      return application;
    },
    getApplicationsByJob: (parent, { jobId }, context, info) => {
      return applications.filter(app => app.jobId === jobId);
    },
    getApplicationsBySeeker: (parent, { seekerId }, context, info) => {
      return applications.filter(app => app.seekerId === seekerId);
    }
  },
  Mutation: {
    createApplication: (parent, args, context, info) => {
      // Assuming here that you'll have some logic to generate a unique ID for the new application
      const newApplication = { id: "newId", ...args };
      applications.push(newApplication);
      return newApplication;
    },
    updateApplicationStatus: (parent, { id, status }, context, info) => {
      const applicationIndex = applications.findIndex(app => app.id === id);
      if (applicationIndex === -1) {
        throw new ApolloError("Application not found", "APPLICATION_NOT_FOUND");
      }
      applications[applicationIndex].status = status;
      return applications[applicationIndex];
    }
  }
};
